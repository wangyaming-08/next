import HomeBgImg from '@/public/reliability.jpg'
import MainComponent from "@/components/main";

export const metadata = {
    title: "reliability",
};


export default function Home() {
    return (
        <MainComponent imgSrc={HomeBgImg} text={'reliability page'}></MainComponent>
    );
}
