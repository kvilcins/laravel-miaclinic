<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Review
 * 
 * @property int $id
 * @property int $user_id
 * @property int $rating
 * @property string $text
 * @property int|null $admin_id
 * @property string|null $reply
 * @property bool $published
 * @property bool $spam
 * @property string|null $relation_model
 * @property int|null $relation_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property User $user
 *
 * @package App\Models
 */
class Review extends Model
{
	protected $table = 'reviews';

	protected $casts = [
		'user_id' => 'int',
		'rating' => 'int',
		'admin_id' => 'int',
		'published' => 'bool',
		'spam' => 'bool',
		'relation_id' => 'int'
	];

	protected $fillable = [
		'user_id',
		'rating',
		'text',
		'admin_id',
		'reply',
		'published',
		'spam',
		'relation_model',
		'relation_id'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
