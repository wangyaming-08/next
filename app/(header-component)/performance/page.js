import bgImgUrl from '@/public/performance.jpg'
import MainComponent from "@/components/main";

export const metadata = {
    title: "performance",
};


export default function Home() {
    return (
        <MainComponent imgSrc={bgImgUrl} text={'performance page'}></MainComponent>
    );
}
