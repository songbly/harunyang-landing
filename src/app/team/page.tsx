"use client";

import styled from "styled-components";
import Image from "next/image";
import {
  subPageTitleBackground,
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
} from "../../assets";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const teams = [
  {
    name: "도지",
    role: "PM",
    image: team1,
  },
  {
    name: "벼루",
    role: "Designer",
    image: team2,
  },
  {
    name: "덩아",
    role: "Designer",
    image: team3,
  },
  {
    name: "거누",
    role: "Frontend Developer",
    image: team4,
  },
  {
    name: "율이",
    role: "Backend Developer",
    image: team5,
  },
  {
    name: "둘기",
    role: "Backend Developer",
    image: team6,
  },
  {
    name: "송",
    role: "Frontend Developer",
    image: team7,
  },
  {
    name: "렛서",
    role: "Marketer",
    image: team8,
  },
];
const Team = () => {
  return (
    <div id="team" className="w-full h-full items-center overflow-hidden">
      <div
        id="header"
        className={"flex justify-center py-3 border-b border-gray-300"}
      >
        <Header />
      </div>
      <div className="relative w-full h-[400px]">
        <div className="absolute top-[80px] left-[50%] translate-x-[-50%]">
          <Image
            src={subPageTitleBackground}
            width={360}
            height={260}
            alt={"title background"}
          />
          <Title>
            팀소개
            <p>하루냥을 키우는 집사들</p>
          </Title>
        </div>
      </div>
      <div className="relative flex w-full justify-center">
        <div className="flex flex-wrap justify-center max-w-[965px] gap-20 mb-80">
          {teams.map((member) => (
            <div key={member.name} style={{ textAlign: "center" }}>
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
              />
              <div className="flex flex-col mt-[24px] text-center">
                <h3 className="font-semibold">{member.name}</h3>
                <Name>{member.role}</Name>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;

const Title = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  font-size: 48px;
  font-weight: 700;
  color: #191919;
  text-align: center;
  > p {
    color: #828282;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Name = styled.p`
  color: #828282;
  font-size: 14px;
`;
