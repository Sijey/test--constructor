'use strict';

const e = React.createElement;

document.body.firstChild.remove();

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'будущий конструктор';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

document.querySelectorAll('#constructor')
    .forEach(domContainer => {
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(LikeButton, { commentID: commentID }),
            domContainer
        );
    });