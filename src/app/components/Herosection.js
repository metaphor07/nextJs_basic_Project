import heroStyle from "@/app/styles/herosection.module.css";
import commonStyle from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

const Herosection = ({ title, imgUrl }) => {
  return (
    <main className={heroStyle.main_section}>
      <div className={commonStyle.container}>
        <div className={commonStyle.grid_two_section}>
          <div className={heroStyle.hero_content}>
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur voluptas impedit eum est molestiae quia dolorum error
              ut repudiandae aperiam!
            </p>
            <Link href="/movie">
              <button>Explore Movies</button>
            </Link>
          </div>

          <div className={heroStyle.hero_image}>
            <Image
              src={imgUrl}
              alt="watching netflix"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
      {/* this is for bottom layer design */}
      <div className={heroStyle["custom-shape-divider-bottom-1681647578"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={heroStyle["shape-fill"]}
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Herosection;
