import { VFC } from "react";
import { useHistory } from "react-router-dom";
import { SearchInput } from "../componenets/SearchInput";

export const Page404: VFC = () => {
  const history = useHistory();

  return (
    <>
      <SearchInput />
      <div className="error　 content">
        <h1>ページが見つかりませんでした</h1>
        <button onClick={() => history.push("/")}>トップへ戻る</button>
      </div>
    </>
  );
};
