# firehose track 5, lesson 4 - file created 13 jul 17 for static page/tasks api

class TasksController < ApplicationController
  def index
#    render json: Task.all     # displays info in json format, not html
# next line added/previous line commented out 14 jul 17 for consistent ordering (lesson 12)
    render json: Task.order(:id)  # can also use (id: :asc) or (id: :desc) for ascending or descending order
  end
  
# update method added 14 jul 17 for update tasks (lesson 10)
  def update
    task = Task.find(params[:id])
    task.update_attributes(task_params)
    render json: task
  end
  
  private

# task_params method added 14 jul 17 for update tasks (lesson 10)
  def task_params
    params.require(:task).permit(:done)
  end
  
end
