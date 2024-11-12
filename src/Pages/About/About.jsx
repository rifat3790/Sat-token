import "./About.css";
import img from '../../assets/about.png';
const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-r from-[#001a00] to-[#003300] py-10 px-10 mx-auto">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bebas font-bold">
          About <span className="text-[#02B81C]">$SAT</span> Token
        </h1>
        <p className="max-w-[630px]">
          Welcome to $SAT, where community is not just a concept, but the very
          heartbeat of our token's ecosystem. We believe in the power of
          collective wisdom and participation, which is why community
          involvement is at the core of everything we do. From decision-making
          to shaping the future direction of $SAT, every voice matters. But it's
          not just about governance – we love giving back to our community.
          That's why we host weekly raffles and giveaways. Our team is
          diligently working on creating a bridge and swap platform, which will
          provide seamless interoperability between different blockchain
          networks, unlocking new possibilities for $SAT holders. Exciting
          developments are on the horizon as well, with staking soon to be
          released. This not only incentivizes long-term commitment but also
          strengthens the security and stability of the $SAT ecosystem.
        </p>
        <button className="btn bg-[#02B81C4D] border-2 border-green-700">Buy Now</button>
      </div>
      <div className="">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
