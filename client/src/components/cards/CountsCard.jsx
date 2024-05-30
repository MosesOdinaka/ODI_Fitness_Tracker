import React from "react";
import styled from "styled-components";

/**
 * Card: Styled component for the card container.
 * Applies padding, border, border-radius, box-shadow, and flexbox styles.
 */
const Card = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  display: flex;
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;

/**
 * Left: Styled component for the left section of the card.
 * Contains the title, value, unit, span, and description with flexbox layout.
 */
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 600px) {
    gap: 6px;
  }
`;

/**
 * Title: Styled component for the card title.
 * Sets font weight, size, and color, with media query adjustments.
 */
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

/**
 * Value: Styled component for the main value displayed on the card.
 * Sets font weight, size, and aligns items at the end with flexbox.
 */
const Value = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  align-items: end;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

/**
 * Unit: Styled component for the unit text next to the value.
 * Sets font size and bottom margin.
 */
const Unit = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

/**
 * Span: Styled component for additional information below the value.
 * Adjusts font weight, size, and color based on the `positive` prop.
 */
const Span = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 12px;
  }

  ${({ positive, theme }) =>
    positive
      ? `
  color: ${theme.green};`
      : `
  color: ${theme.red};`}
`;

/**
 * Icon: Styled component for the icon displayed on the card.
 * Applies padding, flexbox centering, border-radius, background, and color based on props.
 */
const Icon = styled.div`
  height: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  ${({ color, bg }) => `
  background: ${bg};
  color: ${color};
  `}
`;

/**
 * Desc: Styled component for the description text below the value.
 * Sets font size and color, with media query adjustments.
 */
const Desc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + 90};
  margin-bottom: 6px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

/**
 * CountsCard: Functional component to display a card with count information.
 * 
 * @param {Object} item - The item containing the card data (name, unit, description, etc.).
 * @param {Object} data - The data object with values for the card.
 * @returns {JSX.Element} The rendered CountsCard component.
 */
const CountsCard = ({ item, data }) => {
  // Ensure the value is defined and is a number
  const value = data && typeof data[item.key] === 'number' ? data[item.key].toFixed(2) : '0.00';

  return (
    <Card>
      <Left>
        <Title>{item.name}</Title>
        <Value>
          {value}
          <Unit>{item.unit}</Unit>
          <Span positive>(+10%)</Span>
   j     </Value>
        <Desc>{item.desc}</Desc>
      </Left>
      <Icon color={item.color} bg={item.lightColor}>
        {item.icon}
      </Icon>
    </Card>
  );
};

export default CountsCard;
