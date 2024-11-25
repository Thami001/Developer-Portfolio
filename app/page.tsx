import Hero from "@/components/hero";
import {FloatingNav} from "@/components/ui/floating-navbar";
import Grid from "@/components/grid";
import RecentProjects from "@/components/recentProjects";
import {navItems} from "@/components/data";
import Clients from "@/components/clients";
import Experience from "@/components/experience";
import Approach from "@/components/approach";
import Footer from "@/components/footer";


export default function Home() {
  return (
  <main className={"relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5"}>
    <div className={"max-w-7xl"}>
      <h1>
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Experience/>
        <Approach/>
        <Footer/>
      </h1>
    </div>
  </main>
)
}
