import './Features.css';

const Features = () => {
  
  const cards = [
    {
      icon: '⭐',
      title: 'Custom Flashcards',
      description: 'Add your own topics or concepts.',
      color: '#00434A',
      bgcolor: '#ffffff'
    },
    {
      icon: '🚀',
      title: 'Active Recall',
      description: 'Strengthen memory with spaced repetition.',
      color: '#00434A',
      bgcolor: '#ffffff'
    },
    {
      icon: '🎯',
      title: 'Simple & Intuitive',
      description: 'Focus on learning, not complicated setups.',
      color: '#00434A',
      bgcolor: '#ffffff'
    }
  ];

  return (
    
    <div id='features' className='mt-section mt-features-bg-color'>
      <div className='mt-section-content'>

        <center>
          <h1>MemoTest app features</h1>
        </center>
        
        <div className="cards-container">
          {cards.map((card, index) => (
            <div 
              className="info-card" 
              key={index} 
              style={{
                color:card.color, 
                backgroundColor:card.bgcolor
              }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
    
  );
};

export default Features;