import { VFC } from "react";
import { Link } from "react-router-dom";

import { SearchInput } from "../componenets/SearchInput";

export const TopPage: VFC = () => {
  return (
    <>
      <SearchInput />
      <div className="top content">
        <h1>トップページ</h1>
        <p>検索したい文字列を入力してください。</p>
        <Link to={{ pathname: "/result/", state: "あいうえお" }}>
          値（あいうえお）を引き渡して遷移
        </Link>
      </div>
    </>
  );
};
