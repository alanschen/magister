pragma solidity 0.5.1;

contract Learner {
    
    address[] contents;
    address user;
    uint status;
    uint total_points;
    uint future_points;
    
    constructor(address _user) public {
        user = _user;
        status = 0;
        total_points = 0;
        future_points = 0;
    }
    
    function get_user() public view returns(address) {
        return user;
    }
    
    function get_total_points() public view returns(uint) {
        return total_points;
    }
    
    function get_num_contents() public view returns(uint) {
        return contents.length;
    }
    
    function compareStrings(string memory a, string memory b) private view returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
    
    
    function learn_content(address content, string memory metadata) public returns(address) {
        contents.push(content);
        status = 1;
        
        string memory s2 = "big commitment";
        if (compareStrings(metadata, s2)){
            future_points += 10;
        } else {
            future_points += 1;
        }
    }
    
    function reward() public {
        require(status == 1);
        status = 0;
        total_points += future_points;
        future_points = 0;
    }
}