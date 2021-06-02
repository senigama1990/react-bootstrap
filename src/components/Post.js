import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Post(props) {
    const {title, body} = props
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title }</Card.Title>
                <Card.Text>{ body }</Card.Text>
                <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>

    )
}

export default Post
