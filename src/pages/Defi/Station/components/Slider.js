import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { requireNetworkState } from "../../../../store/web3";
import { ReactComponent as DropdownClose } from "./List/assets/dropdown-close.svg";
import { ReactComponent as DropdownOpen } from "./List/assets/dropdown-open.svg";
function Slider({ setParams, params }) {
  const [t] = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [clickType, SetclickType] = useState("All Type")
  // const [requireNetwork, setRequireNetwork] = useRecoilState(
  //   requireNetworkState
  // );
  let Samples = ["All Type", "Flexible", "LP Flexible", "Locked", "LP Locked"];
  return (
    <Type onClick={() => { setOpen(!isOpen) }}>
      <Text className={"Roboto_20pt_Black_L "}>Type</Text>
      <BoxContainer>
        <Box className={"Roboto_20pt_Regular"}>{clickType}</Box>
        <BtnWrapper>
          <DropdownClose fill={"#fff"} />
        </BtnWrapper>
      </BoxContainer>
      {isOpen === false ?
        <div></div>
        :
        <DropDownContents>
          {Samples.map((sample) => {
            return (
              <DropdownList
                className={"Roboto_20pt_Regular"}
                onClick={() => {
                  SetclickType(sample)
                  // setRequireNetwork(1)
                }}
              >{sample}</DropdownList>
            )
          })}

        </DropDownContents>
      }
    </Type>
    // <Container>
    //   <Content>
    //     <div style={{ cursor: "pointer" }}>
    //       <Button
    //         setParams={setParams}
    //         pam={params}
    //         type="Locked"
    //         text="Locked Staking"
    //       />
    //     </div>
    //     <div style={{ cursor: "pointer" }} /*className="disable"*/>
    //       <Button
    //         setParams={setParams}
    //         pam={params}
    //         type="Flexible"
    //         text="Flexible Staking"
    //       />
    //     </div>
    //     <div className="disable">
    //       <Button type="Locked" pam={params} text="LP Locked Staking" />
    //     </div>
    //     <div className="disable">
    //       <Button type="Flexible" pam={params} text="LP Flexible Staking" />
    //     </div>
    //   </Content>
    // </Container>
  );
}
const Type = styled.div`
cursor: pointer;
position:relative;
`;
const Text = styled.div`
margin-bottom:4px;
margin-left:20px;

`;
const Box = styled.div`
display:flex;
margin-left:20px;
height: 42px;
  display: flex;
    justify-content: flex-start;
    align-items: center;

  `;
const BoxContainer = styled.div`
  display:flex;
  width: 196px;
  height: 42px;
  border-radius: 30px;
  background-color: var(--black-30);

`;
const BtnWrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin: auto;
margin-right: 16px;
`
const DropDownContents = styled.div`
  width: 196px;
  height: 250px;
  border-radius: 30px;
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.16);
  background-color: rgba(0, 0, 0, 0.9);
  margin-top:8px;
  position:absolute;
`
const DropdownList = styled.div`
padding: 10px 0px;
&:hover {
  border-radius: 30px;
       background-color: #1c1e35;
   }
`
const Container = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;

  @media (min-width: 1088px) {
    justify-content: center;
  }
`;
const Content = styled.div`
  display: flex;
  max-width: 1088px;
  white-space: nowrap;
  overflow: auto;
  gap: 0px 20px;
  border
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    color: white;
  }
  div {
    &:hover{
      background-color: var(--black-20);
      border-radius: 10px;
    }
  }
  .disable {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 1088px) {
    gap: 10px;
  }
`;

export default React.memo(Slider);

// function Button({ type, text, setParams, pam }) {
//   let params;
//   if (type === "Locked") {
//     if (text.includes("LP")) {
//       params = {
//         type: "Locked",
//         isLP: true,
//         address: "0x",
//       };
//     } else {
//       params = {
//         type: "Locked",
//         isLP: false,
//         address: "0x",
//       };
//     }
//   } else {
//     if (text.includes("LP")) {
//       params = {
//         type: "Flexible",
//         isLP: true,
//         address: "0x",
//       };
//     } else {
//       params = {
//         type: "Flexible",
//         isLP: false,
//         address: "0x",
//       };
//     }
//   }
//   return (

//     <ContainerButton
//       onClick={() => {
//         type !== pam.type ? setParams(params) : console.log("");
//       }}
//     >
//       <div className="box">
//         <img
//           className="Roboto_20pt_Black"
//           src={
//             type === "Locked"
//               ? text.includes("LP")
//                 ? "/ic_lockedstaking_lp.png"
//                 : "/ic_lockedstaking.svg"
//               : text.includes("LP")
//               ? "/ic_flexiblestaking_lp.png"
//               : "/ic_flexiblestaking.svg"
//           }
//         />
//         <p
//           className={
//             window.innerWidth > 1088 ? "Roboto_20pt_Black" : "Roboto_30pt_Black"
//           }
//         >
//           {text}
//         </p>
//       </div>
//     </ContainerButton>
//   );
// }

// const ContainerButton = styled.div`
//   .box {
//     display: flex;
//     flex-direction: column;
//     min-width: 260px;
//     height: 280px;
//     background-color: var(--black-30);
//     border-radius: 10px;
//     -ms-overflow-style: none; /* IE and Edge */
//     scrollbar-width: none; /* Firefox */
//   }
//   .box::-webkit-scrollbar {
//     display: none; /* Chrome, Safari, Opera*/
//   }
//   img {
//     margin: auto auto;
//     margin-bottom: 0px;
//     height: 60px;
//   }
//   p {
//     margin: auto auto;
//     margin-top: 20px;
//   }
//   @media (min-width: 1088px) {
//     min-width: 260px;
//     margin: 0;

//   }
// `;
