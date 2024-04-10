import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));
    return(
        <div>Home 페이지 입니다</div>
    );
};
export default Home;