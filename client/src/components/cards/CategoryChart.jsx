import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

/**
 * Card: Styled component for the chart container.
 * Applies padding, border, border-radius, box-shadow, and flexbox styles.
 */
const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

/**
 * Title: Styled component for the chart title.
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
 * CategoryChart: Functional component to display a pie chart of weekly calories burned.
 * 
 * @param {Object} data - The data for the pie chart, expected to have a pieChartData property.
 * @returns {JSX.Element} The rendered pie chart component.
 */
const CategoryChart = ({ data }) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.pieChartData && (
        <PieChart
          series={[
            {
              data: data?.pieChartData,
              innerRadius: 30,
              outerRadius: 120,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          height={300}
        />
      )}
    </Card>
  );
};

export default CategoryChart;
