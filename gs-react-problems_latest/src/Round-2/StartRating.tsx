import React, {useState} from 'react';

interface StarProps {
    filled: boolean;
    onClick: () => void;
}

// ⭐ Star Component
const Star: React.FC<StarProps> = ({filled, onClick}) => {
    return (
        <span
            onClick={onClick}
            style={{
                cursor: 'pointer',
                fontSize: '20px',
                color: filled ? 'gold' : 'gray',
            }}
        >
            ★
        </span>
    );
};

interface CardProps {
    title: string;
}

// 🧩 Card Component
const Card: React.FC<CardProps> = ({title}) => {
    const [rating, setRating] = useState(0);

    return (
        <div style={{border: '1px solid #ccc', padding: 10, margin: 10}}>
            <h4>{title}</h4>

            {/* ⭐ Stars */}
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    filled={star <= rating}
                    onClick={() => setRating(star)}
                />
            ))}
        </div>
    );
};

// 🚀 Parent Component
const StartRating = () => {
    const cards = ['Card 1', 'Card 2', 'Card 3'];

    return (
        <div>
            <h2>Star Rating Cards</h2>

            {cards.map((card, index) => (
                <Card key={index} title={card} />
            ))}
        </div>
    );
};

export default StartRating;
