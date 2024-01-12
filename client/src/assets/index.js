import { AiOutlinePlusCircle, AiTwotoneStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { MdNavigateNext } from "react-icons/md"
import { LuDelete } from "react-icons/lu"
import { FaRegBuilding } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { GiPriceTag } from "react-icons/gi"
import { GrLinkNext } from "react-icons/gr"
import { LiaCropSolid } from "react-icons/lia"
import { FiSearch } from "react-icons/fi"
import { BsArrowUpCircleFill } from "react-icons/bs"


const images = {
  logo: require("./Logo.svg").default,
  plus: AiOutlinePlusCircle,
  iconNext: MdNavigateNext,
  iconDelete: LuDelete,
  iconBuilding: FaRegBuilding,
  iconLocation: IoLocationOutline,
  iconPrice: GiPriceTag,
  iconArea: LiaCropSolid,
  iconSearch: FiSearch,
  iconStar: AiTwotoneStar,
  iconHeart: AiOutlineHeart,
  iconHeartFill: AiFillHeart,
  iconArrowUp: BsArrowUpCircleFill,
  iconGrNext: GrLinkNext
}

export default images