import React from "react";
import styled from "styled-components";
//store
import { useRecoilState } from "recoil";
import { useState, useEffect, useRef } from "react";
import { requireNetworkState } from "../../../../store/web3";
import { ReactComponent as DropdownClose } from "./List/assets/dropdown-close.svg";
import { ReactComponent as DropdownOpen } from "./List/assets/dropdown-open.svg";

function Networks({ setNetwork, network }) {
  const [isOpen, setOpen] = useState(false);
  const [clickNetwork, SetclickNetwork] = useState("All Networks")
  const [requireNetwork, setRequireNetwork] = useRecoilState(
    requireNetworkState
  );
  let Samples = ["All Networks", "ERC-20", "BEP-20", "HRC-20"];
  return (
    <DropDownWrapper>
      <NetWork onClick={() => { setOpen(!isOpen) }}>
        <Text className={"Roboto_20pt_Black_L "}>Network</Text>

        <BoxContainer>
          <Box className={"Roboto_20pt_Regular"}>{clickNetwork}</Box>
          <BtnWrapper>
            <DropdownClose fill={"#fff"} />
          </BtnWrapper>
        </BoxContainer>
        {isOpen === false ?
          <></> :
          <DropDownContents>
            {Samples.map((sample) => (
              <DropdownList
                className={"Roboto_20pt_Regular"}
                onClick={() => {
                  SetclickNetwork(sample)
                  setRequireNetwork(1)
                }}
              >{sample}</DropdownList>
            ))}
          </DropDownContents>
        }
      </NetWork>
    </DropDownWrapper >
  )
} const DropDownWrapper = styled.div`
  display:flex;


  `;
const NetWork = styled.div`
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
const Type = styled.div`
cursor: pointer;
`;
const Sortby = styled.div``;
const BoxContainer = styled.div`
  display:flex;
  width: 196px;
  height: 42px;
  border-radius: 30px;
  background-color: var(--black-30);

`;
const Button = styled.div``;
const BtnWrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin: auto;
margin-right: 16px;
`
const DropDownContents = styled.div`
  width: 196px;
  height: 204px;
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
//     <Container Container >
//       <Content>
//         <div
//           onClick={() => {
//             // console.log(network);
//             setNetwork("ERC");
//             setRequireNetwork(1);
//           }}
//           className="network"
//           style={{ cursor: "pointer" }}
//         >
//           <Button type="Locked" text="ERC-20" />
//         </div>

//         <div
//           onClick={() => {
//             // console.log(network);
//             setNetwork("BEP");
//             setRequireNetwork(56);
//           }}
//           className="network"
//           style={{ cursor: "pointer" }}
//         >
//           <Button type="Locked" text="BEP-20" />
//         </div>

//         <div className="disable network">
//           <Button
//             onClick={() => setNetwork("HRC")}
//             type="Locked"
//             text="HRC-20"
//           />
//         </div>
//       </Content>
//     </Container >
//   );
// }
// const Container = styled.div`
//   margin-top: 40px;
//   display: flex;
//   width: 100%;

//   @media (min-width: 1088px) {
//     justify-content: center;
//   }
// `;
// const Content = styled.div`
//     display: flex;
//     margin: 0 auto;
//     max-width: 1088px;
//     white-space: nowrap;
//     overflow: auto;
//     gap: 0px 20px;
//     border
//     scrollbar-width: none;
//     -ms-overflow-style: none;
//     &::-webkit-scrollbar {
//       display: none;
//     }
//     a {
//       color: white;
//     }
//     div {
//         display: flex;
//       &:hover{
//         background-color: var(--black-20);
//         border-radius: 10px;
//       }
//     }
//     .disable {
//       cursor: not-allowed;
//       opacity: 0.5;
//     }

//     @media (min-width: 1088px) {
//       gap: 10px;
//     }
//   `;

export default Networks;

// function Button({ text, setParams }) {
//   return (
//     <ContainerButton
//     //   onClick={() => (setParams ? setParams(params) : console.log(""))}
//     >
//       <div className="box">
//         <img
//           src={
//             text === "ERC-20"
//               ? "/ic_erc.png"
//               : text === "BEP-20"
//                 ? "/ic_bnb.png"
//                 : text === "HRC-20"
//                   ? "/ic_ht.png"
//                   : ""
//           }
//         />
//         <p
//           className={
//             window.innerWidth > 1088 ? "Roboto_24pt_Black" : "Roboto_30pt_Black"
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
//     justify-content: center;
//     align-items: center;
//     min-width: 210px;
//     height: 100px;
//     background-color: var(--black-30);
//     border-radius: 10px;
//     -ms-overflow-style: none; /* IE and Edge */
//     scrollbar-width: none; /* Firefox */

//     @media (min-width: 1088px) {
//       min-width: 349px;
//       margin: 0;
//     }
//   }
//   .box::-webkit-scrollbar {
//     display: none; /* Chrome, Safari, Opera*/
//   }
//   img {
//     height: 50px;
//   }
//   p {
//     margin-left: 16px;
//   }
// `;
