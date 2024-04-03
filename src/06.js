console.log(1);
await wait(2000);
console.log(2);

async function await(time) {
  return await new Promise((resolve) => setTimeout(resolve, time));
}

const Demo = () => {
  usePolling(() => {
    console.log("fetch");
  }, 5000);
  return null;
};

function usePolling(fn, time) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        fn();
      }, time);
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [time]);
}
