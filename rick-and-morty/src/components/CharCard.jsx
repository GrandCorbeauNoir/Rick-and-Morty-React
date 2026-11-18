import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CharCard(character) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CharCard;