import React, { useState } from 'react';
import { generatePlan } from './api';
import TaskCard from './components/TaskCard';
import { Loader2, Sparkles } from 'lucide-react';

function App() {
  const [goal, setGoal] = useState('');
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!goal.trim()) return;

    setLoading(true);
    setError(null);
    setPlan(null);

    try {
      const data = await generatePlan(goal);
      setPlan(data);
    } catch (err) {
      setError('Failed to generate plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <Sparkles className="logo-icon" />
          <h1>AI Productivity Agent</h1>
        </div>
        <p className="subtitle">Turn your goals into actionable plans</p>
      </header>

      <main className="main-content">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="What is your goal? (e.g., 'Learn React', 'Plan a trip')"
            className="goal-input"
            disabled={loading}
          />
          <button type="submit" className="generate-btn" disabled={loading || !goal.trim()}>
            {loading ? <Loader2 className="animate-spin" /> : 'Generate Plan'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {plan && (
          <div className="results-container">
            <div className="analysis-section">
              <h2>Analysis</h2>
              <p>{plan.analysis}</p>
            </div>

            <div className="tasks-grid">
              {plan.tasks?.map((task, index) => (
                <TaskCard key={index} task={task} index={index} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
