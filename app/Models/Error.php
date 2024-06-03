<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Error
 * 
 * @property int $id
 * @property string|null $code
 * @property string|null $route
 * @property string|null $referer
 * @property string $file
 * @property int $line
 * @property string $message
 * @property string $ip
 * @property int $hits
 * @property bool $resolved
 * @property int|null $resolver_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Admin|null $admin
 *
 * @package App\Models
 */
class Error extends Model
{
	protected $table = 'errors';

	protected $casts = [
		'line' => 'int',
		'hits' => 'int',
		'resolved' => 'bool',
		'resolver_id' => 'int'
	];

	protected $fillable = [
		'code',
		'route',
		'referer',
		'file',
		'line',
		'message',
		'ip',
		'hits',
		'resolved',
		'resolver_id'
	];

	public function admin()
	{
		return $this->belongsTo(Admin::class, 'resolver_id');
	}
}
