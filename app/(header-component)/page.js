import HomeBgImg from '@/public/home.jpg'
import MainComponent from "@/components/main";

export const metadata = {
  title: "home",
};


export default function Home() {
  return (
    <MainComponent imgSrc={HomeBgImg} text={'Home page'}></MainComponent>
  );
}
