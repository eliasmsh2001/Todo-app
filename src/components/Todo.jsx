import check from "../assets/images/icon-check.svg";
import cross from "../assets/images/icon-cross.svg";

export default function Todo({ title, checked, onCheck, onDelete, ...props }) {
  let spanClass =
    "md:size-5 size-3 border-[1px] rounded-full bg-transparent border-border md:mx-3 mx-1 relative]";
  let txtClass = "text-xs text-mainText font-bold";

  if (checked) {
    txtClass = "text-xs text-border font-medium line-through";
    spanClass =
      "size-5 border-[1px] rounded-full border-border mx-3 flex items-center justify-center ";
  }

  return (
    <li
      className="group h-12 w-full relative p-2 border-b-[1px] flex items-center border-border  bg-contentBg "
      {...props}
    >
      <button onClick={onCheck} id={checked && "active"} className={spanClass}>
        {checked && <img src={check} className=" w-2/3 " alt="" />}
      </button>
      <h3 className={txtClass}>{title}</h3>
      <button
        onClick={onDelete}
        className="absolute right-3 md:right-5 sm:hidden sm:group-hover:flex hover:bg-stone-200 flex items-center justify-center rounded-full transition ease duration-300"
      >
        <img src={cross} alt="" className="size-3" />
      </button>
    </li>
  );
}
