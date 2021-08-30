import { motion } from "framer-motion";
import styled from "styled-components";

export const ComplaintsListWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 2rem 0;
  color: var(--dark-color);
`;