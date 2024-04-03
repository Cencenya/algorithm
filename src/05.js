// 以下面示例为例,如果fetch方法返回成功,则整个方法返回成功;如果fetch方法返回失败,则自动按指定间隔和次数重试
// 当前retriedFunc方法,指定重试次数为3次,间隔为1000ms,即第一次请求失败后,间隔1000ms发起第二次请求,最多重试3次(含首次);
// 重试中有1次成功,则整个方法进入成功回调;如果一直失败,超过次数则返回失败

function fetch(url) {
  return axios.get(url);
}

let retriedFunc = retry(fetch, 3, 1000);

retriedFunc(url).then().catch();

function retry(fn, count, time) {
  // TODO
  return async function (url, attempt = 1) {
    try {
      const value = await fn(url);
      return value;
    } catch (error) {
      if (attempt <= count) {
        await new Promise((resolve) => setTimeout(resolve, time));
        return retry(fn, count, time)(url, attempt + 1);
      } else {
        throw error;
      }
    }
  };
}

// 定义retry函数来包装fetch方法实现重试逻辑
function retry(fetchFunc, retries, interval) {
  return async function (url, attempt = 1) {
    try {
      const response = await fetchFunc(url);
      return response; // 如果请求成功，则直接返回响应
    } catch (error) {
      if (attempt <= retries) {
        console.log(`Attempt ${attempt} failed. Retrying in ${interval}ms...`);
        await new Promise((resolve) => setTimeout(resolve, interval));
        return retry(fetchFunc, retries, interval)(url, attempt + 1); // 递归调用自身进行重试
      } else {
        throw error; // 如果已经达到重试次数上限，则抛出错误
      }
    }
  };
}
