import React, { useEffect } from "react";
import Card from "./shared/Card";
import Title from "./shared/Title";
const Cards = (props) => {
  console.log(`propsCard`,props);
  
  useEffect(()=> {
    props.dispatchCountUser();
  },[])
  return (
    <React.Fragment>
      <Title name="ภาพรวม" />
      <div className="flex flex-wrap">
        <Card
          title="จำนวนผู้ใช้ทั้งหมด"
          value={props.amountUsers}
          color="border-green-600"
          icon="fa fa-wallet fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-green-600"
        />
        {/* <Card
          title="จำนวนคนเฝ้าเดียว"
          value="12"
          color="border-orange-600"
          icon="fas fa-users fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-orange-600"
        /> */}
        <Card
          title="สถานะระบบ"
          value="กำลังทดสอบ"
          color="border-orange-600"
          icon="fas fa-users fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-red-600"
        />
      </div>
    </React.Fragment>
  );
};

export default Cards;
