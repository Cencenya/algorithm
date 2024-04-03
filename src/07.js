const obj =[
  {
    type:'',
    msgId:1,
    sendTime:123
},
{
  type:'',
  msgId:1,
  sendTime:123
},
,
{
  type:'',
  msgId:1,
  sendTime:123
},
];


const fetchMsg = async(msgArr)=>{
  const resultValue = [];
  for (const item of msgArr) {
    const msg = await getMsg(item);
    resultValue.push(msg);
  }
  const sortMsg = resultValue.sort((a,b)=>a.sendTime - b.sendTime)
  merageMsg(sortMsg)
 


}

function merageMsg(msgArr){
  const dbMsg = DBOperation.getDBMsg();
  msgArr.forEach(msgItem => {
  const DBMsg =   dbMsg.find((dbItem)=>dbItem.msgId ===msgItem.msgId) || {};
  if(Object.keys(DBMsg).length > 0){
    DBOperation.updateMsg(msgItem)
  }else{
    DBOperation.insertMsg(msgItem);
  }
  });
}



function FromCommon(props){
const { dataSource,layout} = props
const [show,setShow] = setState(false)

function handleValue(value){
  const isShow = verify(value);
  setShow(setShow)
}
return <From form={useForm} layout={layout} onFish={}>
{
  dataSource.map((item)=>{

    return <FormData.Item
    label={item.key}
    rules=
    >
      {item.value}

    </FormData.Item>



  })
}

<FormData.Item onChange={handleValue}>

</FormData.Item>
{
  show&& <FormData.Item></FormData.Item>
}

  </From>

}