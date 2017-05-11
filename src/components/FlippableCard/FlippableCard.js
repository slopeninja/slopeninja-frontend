import React from 'react';
import classNames from 'classnames';

import './FlippableCard.css';

const FlippableCard = ({
  currentCard,
  children,
  duriation = 0.8,
  cubicBezier = '0.15, 0.90, 0.25, 1.25',
  renderFrontCard,
}) => {
  const flippableCardClassNames = classNames([
    'FlippableCard-card',
    currentCard ? 'FlippableCard-flipped' : '',
  ]);

  const flippableCardStyles = {
    transition: `transform ${duriation}s cubic-bezier(${cubicBezier})`,
    '-o-transition': `transform ${duriation}s cubic-bezier(${cubicBezier})`,
    '-moz-transition': `transform ${duriation}s cubic-bezier(${cubicBezier})`,
    '-webkit-transition': `transform ${duriation}s cubic-bezier(${cubicBezier})`,
  };

  const frontCardContent = renderFrontCard();

  const cards = React.Children.toArray(children);

  if (cards.length === 0) {
    throw Error('You need to include at least 1 child component in Flippable');
  }

  const backCardContent = cards.find(
    element => element.props.id === currentCard,
  );

  if (currentCard && !backCardContent) {
    throw Error(`${currentCard} is not known to Flippable. Make sure your id is spelled correctly.`);
  }

  return (
    <div className="FlippableCard-container">
      <div className={flippableCardClassNames} style={flippableCardStyles}>
        <div className="FlippableCard-face">
          {frontCardContent}
        </div>
        <div className="FlippableCard-face FlippableCard-back">
          {backCardContent}
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
