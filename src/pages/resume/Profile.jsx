import Container from "./components/Container";
import IconBox from "./components/IconBox";
import Location from "./components/Location";
import { PiUserList } from "react-icons/pi";

export default function Profile({ data }) {
  return (
    <Container className="w-full md:w-2/3 pb-2">
      <IconBox IconComponent={PiUserList} />
      <h2>Professional profile</h2>
      <p>{data.profile.professional}</p>
      <Location locationText={data.location} />
    </Container>
  );
}
