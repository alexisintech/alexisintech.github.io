import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import labcoat from "../assets/imgs/labcoat.png";
import seedling from "../assets/imgs/seedling.png";
import hands from "../assets/imgs/shaking-hands.png";
import write from "../assets/imgs/blog.png";
import Widget from "./Widget";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Widget
            title="Previously"
            imgUrl={labcoat}
            description="In her final 2 years at Stetson University, Alexis conducted
            Herpetology + Invasive Species research while also serving her
            peers as both a Biology and Writing Teaching Assistant. After
            receiving a B.S. in both Biology and Chemistry, she was
            privileged to help her community as a veterinary technician in
            gold standard animal hospitals for over 2.5 years."
          />
          <Widget
            title="Mantra"
            imgUrl={seedling}
            description="Alexis is incredibly passionate about her mantra: 'constantly learning, forever growing.' After surviving an adverse childhood, she spends every day creating a life to be proud of. Through reading, journaling, and spirituality, she dedicates herself to nurturing meaningful relationships, finding balance between stress versus positivity, and prioritizing consistent, active growth."
          />
          <Widget
            title="Community"
            imgUrl={hands}
            description="Peace, Love, Unity, Respect. Alexis is incredibly proud to be a Community Relations Administrator of Space Fam, a community of 400+ ravers in Miami, FL. Alexis manages the community chat and discord server, organizes events and info sessions, and advocates for rave safety through drug education and awareness. She loves connecting electronic dance lovers with their favourite DJ's in the music industry."
          />
          <Widget
            title="Blog"
            imgUrl={write}
            description="Taking 5-10 minutes to read a summary can be significantly more efficient than watching the 30 minute video. Alexis's daily blog posts include thoughtfully written summaries/notes for resources on web development, job hunting, and other technical topics. She feels fulfilled when she can provide value to others, so she enjoys giving back to the developer community in any way she can."
          />
        </Row>
      </Container>
    </section>
  );
};
