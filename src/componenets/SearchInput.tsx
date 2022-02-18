import { VFC } from "react";
import { useHistory } from "react-router-dom";

export const SearchInput: VFC = () => {
  const history = useHistory();

  const onClickbtn = () => {
    const inputKeyword = document.querySelector<HTMLElement>(".input_keyword");
    history.push(`/result/?keyword=${inputKeyword.value}`);
    inputKeyword.value = "";
  };
  return (
    <div className="input_area">
      <input type="text" className="input_keyword" />
      <button onClick={onClickbtn}>検索</button>
    </div>
  );
};
