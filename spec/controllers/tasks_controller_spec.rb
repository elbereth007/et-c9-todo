# firehose track 5, lesson 4 - file created 13 jul 17 for static page/tasks api

require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  describe "tasks#index" do
    it "should list the tasks in the database" do
      task1 = FactoryGirl.create(:task)
      task2 = FactoryGirl.create(:task)
      get :index
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value.count).to eq(2)
    end
  end
  
# tasks#update test added 14 jul 17 for update tasks (lesson 10)
  describe "tasks#update" do
    it "should allow tasks to be marked as done" do
      task = FactoryGirl.create(:task, done: false)
      put :update, params: { id: task.id, task: { done: true } }
      expect(response).to have_http_status(:success)
      task.reload
      expect(task.done).to eq(true)
    end
  end

end
