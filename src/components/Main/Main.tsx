import { useState, useEffect } from "react";
import { Button, Collapse } from "@mui/material";
import { FaPlus, FaPen } from "react-icons/fa";
import Card from "./Card/Card";
import Form from "./Form/Form";
import { getList } from "../../services/services";

import classes from "./main.module.css";

const Main = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [LinkData, setLinkData] = useState<Array<string>>([]);
  const [UpdateCards, setUpdateCards] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editData, setEditData] = useState<Array<string>>([]);

  useEffect(() => {
    getList().then((res) => {
      setLinkData(res);
    });
  }, [expanded, UpdateCards]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setIsEdit(false);
  };
  console.log(editData);
  console.log(LinkData);

  return (
    <div>
      <div>
        <h2>حساب کاربری</h2>
      </div>
      <div className={classes.Way}>
        <span>خانه</span>
        <span>.</span>
        <span>کاربر</span>
        <span>.</span>
        <span className={classes.WayNotActive}>تنظیمات کاربری</span>
      </div>
      <div className={classes.BoxForm}>
        <div className={classes.mainBox}>
          <h5>مسیر های ارتباطی</h5>
          <Button
            className={classes.ADDBtn}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            color="warning"
          >
            {!isEdit ? (
              <span>
                <FaPlus className={classes.PlusIcon} /> افزودن مسیر ارتباطی
              </span>
            ) : (
              <span>
                <FaPen className={classes.PlusIcon} /> ویرایش مسیر ارتباطی
              </span>
            )}
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Form
              setExpanded={setExpanded}
              setIsEdit={setIsEdit}
              editData={editData}
              isEdit={isEdit}
            />
          </Collapse>
          <div className={classes.List}>
            {LinkData.length > 0
              ? LinkData.map((items, i) => (
                  <Card
                    key={i}
                    data={items}
                    UpdateCards={UpdateCards}
                    setUpdateCards={setUpdateCards}
                    setExpanded={setExpanded}
                    setIsEdit={setIsEdit}
                    setEditData={setEditData}
                  />
                ))
              : !expanded && (
                  <p className={classes.emptyMessage}>
                    *** وقت بخیر، شما می‌توانید با کلیک بر روی 'افزودن مسیر
                    ارتباطی' یک مسیر ارتباطی اضافه کنید ***
                  </p>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
