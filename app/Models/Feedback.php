<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Feedback
 * 
 * @property int $id
 * @property string $form
 * @property string $data
 * @property string|null $files
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Feedback extends Model
{
	protected $table = 'feedbacks';

	protected $fillable = [
		'form',
		'data',
		'files'
	];
}
