import { useState } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";
import {
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaGlobe,
  FaLinkedin,
  FaTrashAlt,
  FaPen,
} from "react-icons/fa";
import { deleteItem } from "../../../services/services";

import classes from "./card.module.css";
interface CardType {
  data: any;
  setUpdateCards: any;
  UpdateCards: boolean;
  setExpanded: any;
  setIsEdit: any;
  setEditData: any;
}

const Card: React.FC<CardType> = ({
  data,
  setUpdateCards,
  UpdateCards,
  setExpanded,
  setIsEdit,
  setEditData,
}: CardType) => {
  const [open, setOpen] = useState<boolean>(false);
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

  const handleOpenDelete = () => {
    setOpen(true);
  };
  const handleDelete = (e: any) => {
    const id = e.target.value;
    setOpen(false);
    setDisabledBtn(true);
    deleteItem(id).then((res) => {
      setUpdateCards(!UpdateCards);
    });
  };
  const handleEdit = () => {
    setExpanded(true);
    setIsEdit(true);
    setEditData(data);
  };
  const handleChange = (e: any) => {
    const letter = e.target.value;
    if (letter === "تایید") {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const renderSwitchIcon = (param: any) => {
    switch (param) {
      case 1:
        return <FaInstagram />;
      case 2:
        return <FaTelegramPlane />;
      case 3:
        return <FaTwitter />;
      case 4:
        return <FaFacebookF />;
      case 5:
        return <FaLinkedin />;
      case 6:
        return <FaGlobe />;
      default:
        return <FaTwitter />;
    }
  };
  const renderSwitchSocials = (param: any) => {
    switch (param) {
      case 1:
        return "اینستاگرام";
      case 2:
        return "تلگرام";
      case 3:
        return "توییتر";
      case 4:
        return "فیسبوک";
      case 5:
        return "لینکدین";
      case 6:
        return "وبسایت";
      default:
        return "پیدا نشد";
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalBody}>
          <h4>آیا از تصمیم خود مطمئن هستید؟</h4>
          <p>
            برای حذف مسیر ارتباطی <span>{data?.value?.IDs}</span> لطفا تایید را
            بنویسید
          </p>
          <TextField
            className={classes.modalInput}
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="تایید"
            onChange={handleChange}
          />
          <div className={classes.buttonsBox}>
            <Button
              color="warning"
              className={classes.editBtn}
              value={data?.id}
              onClick={() => setOpen(false)}
            >
              انصراف
            </Button>
            <Button
              disabled={disabledBtn}
              color="error"
              value={data?.id}
              className={classes.deleteBtn}
              onClick={handleDelete}
            >
              تایید
            </Button>
          </div>
        </Box>
      </Modal>
      <div className={classes.Card}>
        <div className={classes.CardBody}>
          <div className={classes.RightSide}>
            <div>
              {renderSwitchIcon(data?.value?.Socials)}
              <h4>{renderSwitchSocials(data?.value?.Socials)}</h4>
            </div>
            <div>
              <span> آی دی (ID) :</span>
              <div className={classes.cardId}>{data?.value?.IDs}</div>
            </div>
            <div>
              <span> لینک :</span>
              <div className={classes.cardLink}>{data?.value?.Links}</div>
            </div>
          </div>
          <div>
            <Button
              color="warning"
              className={classes.editBtn}
              value={data.id}
              onClick={handleEdit}
            >
              <FaPen />
              <span className={classes.buttonText}>ویرایش</span>
            </Button>
            <Button
              color="error"
              value={data.id}
              className={classes.deleteBtn}
              onClick={handleOpenDelete}
            >
              <FaTrashAlt />
              <span className={classes.buttonText}>حذف</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
