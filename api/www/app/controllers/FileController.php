<?php

class FileController extends BaseController {

	public function __construct(FileRepository $file)
	{
		$this->file = $file;
	}

	public function showView()
	{
		return View::make('home');
	}

	public function getAllFiles()
	{
		try {
			$data['data'] = $this->file->getAllFiles();
		} catch (Exception $e) {

			$message = $e->getMessage();
			$error = array('message'=>$message);
			return $this->error($error);

		}

		return Response::json($data);
	}

	public function getFileByID($id)
	{
		try {
			$data['data'] = $this->file->getFileByID($id);
		} catch (Exception $e) {

			$message = $e->getMessage();
			$error = array('message'=>$message);
			return $this->error($error);

		}

		return Response::json($data);
	}

	public function displayFileByID($id)
	{
		try {
			$response = $this->file->displayFileByID($id);
		} catch (Exception $e) {

			$message = $e->getMessage();
			$error = array('message'=>$message);
			return $this->error($error);

		}

		return $response;
	}

	public function displayFileList()
	{
		try {
			$response = $this->file->displayFileList();
		} catch (Exception $e) {

			$message = $e->getMessage();
			$error = array('message'=>$message);
			return $this->error($error);

		}

		return $response;
	}

	public function uploadFile()
	{
		$inputFile = Input::file('file'); // your file upload input field in the form should be named 'file'

		try {
			$response = $this->file->uploadFile($inputFile);
		} catch (Exception $e) {

			$message = $e->getMessage();
			$error = array('message'=>$message);
			return $this->error($error);

		}

		return $response;
	}

	public function deleteFile($id)
	{
		try {
			$file['data'] = $this->file->deleteFile($id);
		} catch (Exception $e) {

			$message = $e->getMessage();
			$error = array('message'=>$message);
			return $this->error($error);

		}

		return Response::json($file);
	}

}
