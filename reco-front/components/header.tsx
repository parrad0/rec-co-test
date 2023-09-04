import Link from "next/link";

function Header() {
  return (
    <div className="h-16 w-full px-4 flex items-center z-10 bg-primary justify-between">
      <div className="">
        <div className="flex space-x-2">
          <Link
            href="/"
            className="text-white text-xl font-bold px-4 py-2 mr-4"
          >
            WeatherAPP
          </Link>
          <Link
            href="/location/london"
            className="text-white rounded-md border border-white px-4 py-2"
          >
            London
          </Link>
          <Link
            href="/location/madrid"
            className="text-white rounded-md border border-white px-4 py-2"
          >
            Madrid
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
