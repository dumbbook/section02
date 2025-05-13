import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";

export default function Home() {
  return <h1 className={style.h1}>인덱스</h1>;
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
