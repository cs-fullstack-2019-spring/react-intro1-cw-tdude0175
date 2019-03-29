import  React , {Component} from 'react';


class BankAccount extends Component
{
    render() {
        return (
            <div>
                <h2>Welcome {this.props.account.name}</h2>
                <h3>Your account balance is ${this.props.account.balance}</h3>
            </div>
        );
    }
}

export default BankAccount