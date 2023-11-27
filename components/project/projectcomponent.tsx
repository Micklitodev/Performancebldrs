import Image from "next/image";

const ProjectComponent: React.FC = async (): Promise<JSX.Element> => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/1.jpg"
              alt="verison"
              width={250}
              height={250}
              style={{height: 200}}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/2.jpg"
              alt=""
              width={250}
              height={250}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/2.jpg"
              alt="strip pt2"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/3.jpg"
              alt="shopping strip"
              width={250}
              height={250}
              style={{height: 180}}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/4.jpg"
              alt="party city"
              width={250}
              height={250}
              style={{height: 170}}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/5.jpg"
              alt="shopping center"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/6.jpg"
              alt="tjmax"
              width={250}
              height={250}
              style={{height: 120}}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/7.jpg"
              alt="fivebelow"
              width={250}
              height={250}
              style={{height: 150}}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/8.jpg"
              alt="salon"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/9.jpg"
              alt="homegoods"
              width={250}
              height={250}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/91.jpg"
              alt="burlington"
              width={250}
              height={250}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/PBgallery/92.jpg"
              alt="peachtree med"
              width={250}
              height={250}
              style={{height: 110}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectComponent;
