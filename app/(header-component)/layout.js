import Header from '@/components/herder'

export default function Layout({ children }) {

    return (
        <>
            <Header />
            {children}
        </>
    );
}
