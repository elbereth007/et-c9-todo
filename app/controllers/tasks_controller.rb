# firehose track 5, lesson 4 - file created 13 jul 17 for static page/tasks api

class TasksController < ApplicationController
  def index
    render json: Task.all
  end
end
