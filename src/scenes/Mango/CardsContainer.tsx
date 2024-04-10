import React from 'react';
import Card from './Card';

const cardsData = [
  {
    id: 1,
    defaultText: 'Ongoing monitoring and control of accounts',
    hoverText: 'Rimon hedge funds have smart automated tracking tools that incorporate real-time alerts.',
  },
  {
    id: 2,
    defaultText: 'Sudden changes in interest rate differentials',
    hoverText: 'Rimon Hedge Funds includes in its investment portfolio several currency and commodity pairs, thus creating diversity in the investment portfolio',
  },
  {
    id: 3,
    defaultText: 'Loss due to payment of  the negative interest',
    hoverText: 'Rimon Hedge Funds has  completely neutralized the negative interest component and will not pay the negative interest.',
  },
  {
    id: 4,
    defaultText: 'Large capital is required to achieve high level of return',
    hoverText: 'Rimon Hedge Funds leverage investors`s money in this strategy, so even with this small investment portfolio it is possible to reach adequate returns.',
  },
  {
    id: 5,
    defaultText: 'An extensive database is required',
    hoverText: 'Rimon Hedge Funds regularly monitors interests rate data from many brokers and takes care to update them frequently.',
  },
  {
    id: 6,
    defaultText: 'investors financial risk',
    hoverText: 'Rimon Hedge Funds invests the fund`s money in regulated brokers at the highest and most stringent level of supervision such as the FCA.',
  },
  
];

const CardsContainer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
      {cardsData.map((card) => (
        <Card key={card.id} defaultText={card.defaultText} hoverText={card.hoverText} />
      ))}
    </div>
  );
};

export default CardsContainer;
