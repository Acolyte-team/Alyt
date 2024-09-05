import AuxBar from "../components/AuxBar";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

export default function Page() {
    return(
        <div className="w-full h-screen">
            <Header accessGranted={true} />

            <div
                className="px-8 flex flex-row justify-between"
            >
                <div
                    className="w-3/12"
                >
                    <CreatePost />
                </div>

                <div
                    className="w-5/12"
                >
                    <PostCard />
                </div>

                <div
                    className="w-3/12"
                >
                    <AuxBar />
                </div>
            </div>
        </div>
    )
}