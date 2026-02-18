import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Tag } from 'lucide-react';

const TaskCard = ({ task, index }) => {
    const getPriorityClass = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'high': return 'priority-high';
            case 'medium': return 'priority-medium';
            case 'low': return 'priority-low';
            default: return 'priority-normal';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="task-card"
        >
            <div className="task-header">
                <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                    {task.priority || 'Normal'}
                </span>
                <span className="task-deadline">
                    <Clock size={14} />
                    {task.deadline || 'No deadline'}
                </span>
            </div>

            <h3 className="task-title">{task.task}</h3>

            <div className="task-footer">
                <div className="task-category">
                    <Tag size={16} />
                    <span>{task.category || 'General'}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default TaskCard;
