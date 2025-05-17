import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Branch } from '../data/semesterData';

interface BranchSelectorProps {
  branches: Branch[];
  selectedBranch: Branch | null;
  onSelectBranch: (branch: Branch) => void;
}

const BranchSelector: React.FC<BranchSelectorProps> = ({
  branches,
  selectedBranch,
  onSelectBranch,
}) => {
  return (
    <div className="mb-4 branch-selector-container">
      <h2 className="fs-4 fw-semibold mb-3 text-neon">Select Your Branch</h2>
      <Row xs={1} md={3} className="g-3">
        {branches.map((branch) => (
          <Col key={branch.id}>
            <Button
              variant={selectedBranch?.id === branch.id ? 'primary' : 'outline-info'}
              className="w-100 py-2 branch-btn"
              onClick={() => onSelectBranch(branch)}
              style={{ 
                backgroundColor: selectedBranch?.id === branch.id ? 'rgba(200, 162, 200, 0.2)' : 'transparent',
                borderColor: '#c8a2c8',
                color: '#c8a2c8'
              }}
            >
              {branch.name}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BranchSelector;
