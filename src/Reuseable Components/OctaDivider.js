import styled from "styled-components";
import Divider from "../Images/divider.png";
const OctaDivider = styled.img`

  padding-inline: ${(props) =>
    props.paddingInline ? props.paddingInline : ""};
  padding-block: ${(props) => (props.paddingBlock ? props.paddingBlock : "")};
  padding-bottom: "0px";
  display: ${(props) => (props.display ? props.display : "flex")};
  width: 100%;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "")};
  background: ${(props) => (props.background ? props.background : "var(--basegrey)")};

  @media (max-width: 992px) {
    margin-bottom: ${(props) =>
      props.SMmarginBottom ? props.SMmarginBottom : ""};
  }

  @media (max-width: 600px) {
    margin-bottom: ${(props) =>
      props.SMmarginBottom ? props.SMmarginBottom : ""};
  }
`;

OctaDivider.defaultProps = {
    src: Divider,
  };

export default OctaDivider;
