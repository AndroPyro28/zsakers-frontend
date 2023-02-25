import {
  AboutContainer,
  DonutsBg,
  AboutContent,
  StoreContent,
  Content,
} from "./components";
function About() {
  return (
    <AboutContainer>
      <DonutsBg></DonutsBg>

      <AboutContent>
        <img src="/assets/logo.jpg" />
        <h1>About Us</h1>
        <p>
          Our store begins in 2022 this is the first ever Zsakers Cafe franchise
          store in Malolos, Bulacan. The Owner of Zsakers Café Malolos is Albert
          Roxas Sumera. We offer many variety of donuts and we also offer drinks
          such as hot coffee, iced Coffee, Frappuccino, fruit teas, and Milk
          teas. Our Store give you a hundred percent quality flavored donut and
          drinks we make sure that our products and service makes you feel
          satisfied. Everyone is welcome in our store whether you are young or
          old.
        </p>
        <h2>Our Store</h2>

        <StoreContent>
          <Content>
            <img src="/assets/storepic1.jpg" />
            <h3>Hagonoy Branch</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
              doloribus architecto? Odit adipisci non voluptates natus
              cupiditate repudiandae unde veritatis ut impedit vel optio placeat
              enim similique amet assumenda ullam sint harum, nihil vero ducimus
              aliquid laboriosam minus! Voluptatibus alias natus asperiores illo
              repellat quibusdam! Distinctio ab illum officia atque?
            </p>
          </Content>
          <Content>
            <img src="/assets/storepic2.jpg" />
            <h3>Malolos Branch</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
              doloribus architecto? Odit adipisci non voluptates natus
              cupiditate repudiandae unde veritatis ut impedit vel optio placeat
              enim similique amet assumenda ullam sint harum, nihil vero ducimus
              aliquid laboriosam minus! Voluptatibus alias natus asperiores illo
              repellat quibusdam! Distinctio ab illum officia atque?
            </p>
          </Content>
        </StoreContent>
        <video src="/assets/intro.mp4" controls autoPlay />
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
