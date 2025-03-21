import HomeBgImg from '@/public/scale.jpg'
import MainComponent from "@/components/main";

export const metadata = {
    title: "scale",
};

export default function Home() {
    return (
        <MainComponent imgSrc={HomeBgImg} text={'scale page'}></MainComponent>
    );
}
