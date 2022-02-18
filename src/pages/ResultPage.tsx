import { VFC } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SearchInput } from "../componenets/SearchInput";

export const ResultPage: VFC = () => {
  const location = useLocation();
  // クエリパラメーターを取得
  const search = location.search;
  // useHistoryを取得
  const history = useHistory();
  // 値だけ取り出す
  const query = new URLSearchParams(search);

  return (
    <>
      <SearchInput />
      <div className="result　 content">
        <h1>検索結果</h1>
        <p>あなたが検索したのは</p>
        <p>「{query.get("keyword")}」です。</p>
        {location.state && <p>stateで引き渡された値は「{location.state}」です。</p>}
        <button onClick={() => history.push("/")}>トップへ戻る</button>
      </div>
    </>
  );
};
